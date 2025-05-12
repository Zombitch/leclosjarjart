import { Component, inject } from '@angular/core';
import { Tile } from '../interfaces/tile.interface';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { ContactMailComponent } from '../components/contact-mail/contact-mail.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
    readonly contactDialog = inject(MatDialog);
    
    images: string[] = [
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_5terre_wide.jpg",
    "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_5terre_wide.jpg",
    "https://www.w3schools.com/howto/img_mountains_wide.jpg"]

    openContactDialog(){
        this.contactDialog.open(ContactMailComponent);
    }
}
