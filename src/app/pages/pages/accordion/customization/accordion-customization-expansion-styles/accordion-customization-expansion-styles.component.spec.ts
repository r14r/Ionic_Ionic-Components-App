import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionCustomizationExpansionStylesComponent } from './accordion-customization-expansion-styles.component';

describe('AccordionCustomizationExpansionStylesComponent', () => {
  let component: AccordionCustomizationExpansionStylesComponent;
  let fixture: ComponentFixture<AccordionCustomizationExpansionStylesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCustomizationExpansionStylesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionCustomizationExpansionStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
