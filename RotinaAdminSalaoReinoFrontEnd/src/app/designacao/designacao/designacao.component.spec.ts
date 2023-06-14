import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignacaoComponent } from './designacao.component';

describe('DesignacaoComponent', () => {
  let component: DesignacaoComponent;
  let fixture: ComponentFixture<DesignacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
