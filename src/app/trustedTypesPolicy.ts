let componentPolicy: TrustedTypePolicy | undefined

export function getPolicy(): TrustedTypePolicy {
  if (componentPolicy === undefined) {
    componentPolicy = TrustedTypes.createPolicy('app-root-policy', {
      createHTML(s: string): string {
        console.log('App createHTML', s)
        return s;
      },
      createURL(s: string): string {
        console.log('App createURL', s)
        return s;
      },
      createScriptURL(s: string): string {
        console.log('App createScriptURL', s)
        return s;
      },
      createScript(s: string): string {
        console.log('App createScript', s)
        return s;
      },
    });
  }
  return componentPolicy
}