import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorpaginaComponent } from './voorpagina.component';

describe('VoorpaginaComponent', () => {
  let component: VoorpaginaComponent;
  let fixture: ComponentFixture<VoorpaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorpaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoorpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
