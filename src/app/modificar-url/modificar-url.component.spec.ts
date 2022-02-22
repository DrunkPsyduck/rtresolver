import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarUrlComponent } from './modificar-url.component';

describe('ModificarUrlComponent', () => {
  let component: ModificarUrlComponent;
  let fixture: ComponentFixture<ModificarUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
