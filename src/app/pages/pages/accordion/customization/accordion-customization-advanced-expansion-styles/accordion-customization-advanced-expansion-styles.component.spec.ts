import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionCustomizationAdvancedExpansionStylesComponent } from './accordion-customization-advanced-expansion-styles.component';

describe('AccordionCustomizationAdvancedExpansionStylesComponent', () => {
  let component: AccordionCustomizationAdvancedExpansionStylesComponent;
  let fixture: ComponentFixture<AccordionCustomizationAdvancedExpansionStylesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCustomizationAdvancedExpansionStylesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionCustomizationAdvancedExpansionStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
