
import {IGuide} from "./models/IGuide";

const BOARDME_NOT_INSTALLED_ERROR: string = "boardme is not installed! Please visit the docs section on https://boardme.io and follow the installation instructions."



export function renderGuide(identifier: string, targetElement?: HTMLElement): IGuide | null {

    if ( ! isBoardmeInstalled() ) {
        console.error( BOARDME_NOT_INSTALLED_ERROR );
        return null;
    }

    return getBoardme().renderGuide( identifier, targetElement );
}




function isBoardmeInstalled(): boolean {
    return !!(window as any).boardme;
}



function getBoardme(): any {
    return (window as any).boardme;
}
