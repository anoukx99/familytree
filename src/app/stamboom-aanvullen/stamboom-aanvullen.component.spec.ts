import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StamboomAanvullenComponent } from './stamboom-aanvullen.component';

describe('StamboomAanvullenComponent', () => {
  let component: StamboomAanvullenComponent;
  let fixture: ComponentFixture<StamboomAanvullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StamboomAanvullenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StamboomAanvullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
