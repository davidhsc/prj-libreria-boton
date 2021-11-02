import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibreriaBotonComponent } from './test-libreria-boton.component';

describe('TestLibreriaBotonComponent', () => {
  let component: TestLibreriaBotonComponent;
  let fixture: ComponentFixture<TestLibreriaBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibreriaBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibreriaBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
