import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe comenzar con el login desactivado', () => {
    expect(component.isLogin).toBeFalsy();
  });

  it('Debe activar la sesión al dar Login y dejar la variable guardada', () =>{
    component.saveKey();
    expect(component.isLogin).toBeTruthy();
  });
});
