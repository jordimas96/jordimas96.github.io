import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImatgeScrollComponent } from './imatge-scroll.component';

describe('ImatgeScrollComponent', () => {
  let component: ImatgeScrollComponent;
  let fixture: ComponentFixture<ImatgeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImatgeScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImatgeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
