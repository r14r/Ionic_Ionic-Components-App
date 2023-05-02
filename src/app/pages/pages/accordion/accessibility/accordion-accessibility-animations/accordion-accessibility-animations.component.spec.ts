import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionAccessibilityAnimationsComponent } from './accordion-accessibility-animations.component';

describe('AccordionAccessibilityAnimationsComponent', () => {
  let component: AccordionAccessibilityAnimationsComponent;
  let fixture: ComponentFixture<AccordionAccessibilityAnimationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAccessibilityAnimationsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionAccessibilityAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
