import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartCreateComponent } from './spare-part-create.component';

describe('SparePartCreateComponent', () => {
  let component: SparePartCreateComponent;
  let fixture: ComponentFixture<SparePartCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparePartCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparePartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
