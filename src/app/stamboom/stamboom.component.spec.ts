import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StamboomComponent } from './stamboom.component';

describe('StamboomComponent', () => {
  let component: StamboomComponent;
  let fixture: ComponentFixture<StamboomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StamboomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StamboomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
