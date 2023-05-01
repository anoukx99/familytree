import { TestBed, async } from '@angular/core/testing';
import { Stamboom2Component } from './stamboom2.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Stamboom2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Stamboom2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(Stamboom2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Stamboom2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to demo!');
  });
});
