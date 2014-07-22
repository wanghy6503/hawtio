/**
 * @module Core
 */
module Core {

  /**
   * List of configuration tabs. Each tab provides a template for specific configuration area. These tabs are
   * displayed in "preferences".
   */
  export class PreferencesRegistry {

    private tabs:any = {};

    constructor() {
    }

    /**
     * Add named template which contains a form for configuring specific options.
     *
     * @param name
     * @param template
     * @param isValid
     */
    public addTab(name:string, template:string, isValid:() => boolean = undefined) {
      if (!isValid) {
        isValid = () => {
          return true;
        };
      }
      this.tabs[name] = {
        template: template,
        isValid: isValid
      };
    }

    public getTab(name:string) {
      return this.tabs[name];
    }

    public getTabs():any {
      var answer = {};
      angular.forEach(this.tabs, (value, key) => {
        if (value.isValid()) {
          answer[key] = value;
        }
      });
      return answer;
    }
  }

}
