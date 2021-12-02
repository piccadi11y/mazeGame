/// <reference path="userInterfaceElement.ts"/>

namespace MG {

    export class UserInterfaceContainer extends UserInterfaceElement {

        protected _elements: UserInterfaceElement[] = [];

        public getElementByName (name: string): UserInterfaceElement {
            let result = super.getElementByName(name) as UserInterfaceElement;
            if (result !== undefined) return result;

            for (let el of this._elements) {
                result = el.getElementByName(name);
                if (result !== undefined) return result;
            }

            return undefined;
        }

    }
}