import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import FamilyTree from "@balkangraph/familytree.js";
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs';


//type Ouders = Array<{id: number, fid: number, mid: number, naam1: string, naam2: string}>
type DataType = { id: number, fid: number, mid: number, name: string };
type DataType2 = { id: number, mid: number, name: string };
type DataType3 = { id: number, mid: number, name: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'familytree';
  apiUrl = 'https://217.160.202.115:8080';
}
