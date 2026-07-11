// Cloudflare Pages Function — /kakao-token
// 카카오 로그인 인가 코드를 액세스 토큰으로 교환한다 (REST API 키는 서버에서만 사용).
//
// 운영 배포 시 Cloudflare Pages 프로젝트 설정 > Environment variables 에
// KAKAO_REST_API_KEY (필수), KAKAO_CLIENT_SECRET (선택, Client Secret을 켠 경우) 를
// 등록하면 아래 기본값 대신 그 값이 사용된다.
const DEFAULT_REST_API_KEY = '661034ae71137967fa457fd232842c80';

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return Response.json({ error: 'invalid_request' }, { status: 400 });
  }

  const { code, redirectUri } = body || {};
  if (!code || !redirectUri) {
    return Response.json({ error: 'missing_code' }, { status: 400 });
  }

  const restApiKey = env.KAKAO_REST_API_KEY || DEFAULT_REST_API_KEY;
  const clientSecret = env.KAKAO_CLIENT_SECRET || '';

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: restApiKey,
    redirect_uri: redirectUri,
    code
  });
  if (clientSecret) params.set('client_secret', clientSecret);

  const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    body: params.toString()
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) {
    return Response.json(
      { error: tokenData.error || 'token_exchange_failed', error_description: tokenData.error_description },
      { status: 400 }
    );
  }

  // 클라이언트에는 액세스 토큰만 반환한다 (refresh_token은 이 앱에서 사용하지 않음).
  return Response.json({ access_token: tokenData.access_token });
}
