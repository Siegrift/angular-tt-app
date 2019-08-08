let componentPolicy: any;

export function getPolicy(): any {
  if (componentPolicy === undefined) {
    const rules = {
      createHTML(s: string): string {
        console.log('App createHTML', s);
        return s;
      },
      createURL(s: string): string {
        console.log('App createURL', s);
        return s;
      },
      createScriptURL(s: string): string {
        console.log('App createScriptURL', s);
        return s;
      },
      createScript(s: string): string {
        console.log('App createScript', s);
        return s;
      },
    };
    if (typeof TrustedTypes === 'undefined') {
      componentPolicy = rules;
    } else {
      componentPolicy = TrustedTypes.createPolicy('app-root-policy', rules);
    }
  }
  return componentPolicy;
}
