import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListagemComponent } from './usuario-listagem.component';

describe('UsuarioListagemComponent', () => {
  let component: UsuarioListagemComponent;
  let fixture: ComponentFixture<UsuarioListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
