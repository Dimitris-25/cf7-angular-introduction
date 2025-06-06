import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [
    {
  "givenName": "Benoit",
  "surName": "Swansborough",
  "email": "bswansborough0@technorati.com",
  "age": 1,
  "address": "20th Floor"
}, {
  "givenName": "Bud",
  "surName": "Schankelborg",
  "email": "bschankelborg1@shareasale.com",
  "age": 2,
  "address": "Apt 1767"
}, {
  "givenName": "Joli",
  "surName": "Hintzer",
  "email": "jhintzer2@japanpost.jp",
  "age": 3,
  "address": "20th Floor"
}, {
  "givenName": "Prisca",
  "surName": "Dunklee",
  "email": "pdunklee3@friendfeed.com",
  "age": 4,
  "address": "Room 1530"
}, {
  "givenName": "Franz",
  "surName": "Oultram",
  "email": "foultram4@privacy.gov.au",
  "age": 5,
  "address": "Apt 332"
}, {
  "givenName": "Callean",
  "surName": "Figgs",
  "email": "cfiggs5@china.com.cn",
  "age": 6,
  "address": "4th Floor"
}, {
  "givenName": "Modestia",
  "surName": "Skatcher",
  "email": "mskatcher6@hatena.ne.jp",
  "age": 7,
  "address": "Apt 1406"
}, {
  "givenName": "Torr",
  "surName": "Rogier",
  "email": "trogier7@photobucket.com",
  "age": 8,
  "address": "Suite 75"
}, {
  "givenName": "Devland",
  "surName": "Laurencot",
  "email": "dlaurencot8@cnet.com",
  "age": 9,
  "address": "PO Box 30743"
}, {
  "givenName": "Tallie",
  "surName": "Stambridge",
  "email": "tstambridge9@mashable.com",
  "age": 10,
  "address": "Room 1433"
}, {
  "givenName": "Lucius",
  "surName": "Teligin",
  "email": "lteligina@engadget.com",
  "age": 11,
  "address": "Apt 189"
}, {
  "givenName": "Romeo",
  "surName": "Lowfill",
  "email": "rlowfillb@dell.com",
  "age": 12,
  "address": "PO Box 92474"
}, {
  "givenName": "Friederike",
  "surName": "Woodrup",
  "email": "fwoodrupc@sohu.com",
  "age": 13,
  "address": "PO Box 60215"
}, {
  "givenName": "Emera",
  "surName": "O'Leagham",
  "email": "eoleaghamd@washington.edu",
  "age": 14,
  "address": "10th Floor"
}, {
  "givenName": "Spense",
  "surName": "Villalta",
  "email": "svillaltae@vk.com",
  "age": 15,
  "address": "Suite 27"
}, {
  "givenName": "Clerc",
  "surName": "Churchlow",
  "email": "cchurchlowf@cnn.com",
  "age": 16,
  "address": "17th Floor"
}, {
  "givenName": "Barth",
  "surName": "Lujan",
  "email": "blujang@bbc.co.uk",
  "age": 17,
  "address": "Suite 66"
}, {
  "givenName": "Joyce",
  "surName": "Allden",
  "email": "jalldenh@fotki.com",
  "age": 18,
  "address": "Room 1811"
}, {
  "givenName": "Ervin",
  "surName": "Upham",
  "email": "euphami@gravatar.com",
  "age": 19,
  "address": "17th Floor"
}, {
  "givenName": "Wainwright",
  "surName": "Sodory",
  "email": "wsodoryj@prlog.org",
  "age": 20,
  "address": "Suite 34"
}]
  
}



