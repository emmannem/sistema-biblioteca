import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devolver } from './devolver';

describe('Devolver', () => {
  let component: Devolver;
  let fixture: ComponentFixture<Devolver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devolver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devolver);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
