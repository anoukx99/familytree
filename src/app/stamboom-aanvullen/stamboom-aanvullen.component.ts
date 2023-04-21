import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

interface TextField {
  show: boolean;
  geliefde: string;
  familyMember: string; // <-- add this line
  childAdded: boolean;
  childLimitReached: boolean;
  children: any[];
}

@Component({
  selector: 'app-stamboom-aanvullen',
  templateUrl: './stamboom-aanvullen.component.html',
  styleUrls: ['./stamboom-aanvullen.component.css']
})
export class StamboomAanvullenComponent implements AfterViewInit {
  textFields: TextField[] = [];

  //ouders
  myData: any = [];
  naam1: any = [];
  naam2: any = [];

  selectedFamilyMember: string | undefined;
  showAdditionalTextbox = false;
  aanhang = "";

  readonly ROOT_URL_ouders = this.Appcomponent.apiUrl + '/getallouders';

  familyMembers: string[] = [];

  constructor(private elementRef: ElementRef, private http: HttpClient, private Appcomponent:AppComponent) {}

  async ngOnInit() {
    //Ouders gedeelte
    console.log("aaai");
    this.myData = await this.http.get(this.ROOT_URL_ouders).toPromise();
    this.naam1 = this.myData.map((result2: { naam1: any; }) => result2.naam1);
    this.naam2 = this.myData.map((result2: { naam2: any; }) => result2.naam2);
    this.familyMembers = this.naam1;
    console.log(this.familyMembers)
  }

  showTextbox(): void {
    this.showAdditionalTextbox = this.selectedFamilyMember != null;
  }

  toggleTextField() {
    const textField = { show: true, childAdded: false, childLimitReached: false, children: [], geliefde: "", familyMember: "" };
    this.textFields.push(textField);
  }

  addChild(textField: TextField) {
    if (textField.children.length < 15) {
      textField.children.push({ name: '' }); // <-- add name property here
      textField.childAdded = true;
      textField.childLimitReached = textField.children.length === 15;
  
      // Add the "kind-toevoegen" class to the new button(s)
      const buttons = document.getElementsByClassName('add-child-button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('kind-toevoegen');
      }
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'lightblue';
  }

  printTextFields() {
    var sendString = this.Appcomponent.apiUrl + "/addFamilieLeden/";
    sendString = sendString + this.selectedFamilyMember + "," + this.aanhang 
    var kinderen = "";
    var kleinkinder = "";
    var count = 0;
    for (let textField of this.textFields) {
      kleinkinder = kleinkinder + count + ","
      kinderen = kinderen + count + "," + textField.familyMember + "," + textField.geliefde + ","
      for (let child of textField.children) {
        kleinkinder = kleinkinder + child.name + ","
        console.log(child.name)
      }
      count = count + 1
    }
    if (this.textFields.length == 0 || this.textFields[0].familyMember == "") {
      this.http.get(sendString).subscribe()
      console.log(sendString)
    } else if (this.textFields.length > 0 && kleinkinder.length < 3) {
      this.http.get(sendString + "/" + kinderen.slice(0,-1)).subscribe()
      console.log(sendString + "/" + kinderen.slice(0,-1))
    } else{
    this.http.get(sendString + "/" + kinderen.slice(0,-1) + "/" + kleinkinder.slice(0,-1)).subscribe()
    console.log(sendString + "/" + kinderen.slice(0,-1) + "/" + kleinkinder.slice(0,-1))}
  }
}

