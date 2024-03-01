export function isJWTExpired(token: string): boolean {
  try {
    const { exp } = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString(),
    );
    return (
      new Date(exp * 1000) <=
      new Date()
    );
  } catch (e) {
    console.log(`Unable to parse JWT: ${token}`);
    return true;
  }
}
