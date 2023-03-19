import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadetalhadaComponent } from './buscadetalhada.component';

describe('BuscadetalhadaComponent', () => {
  let component: BuscadetalhadaComponent;
  let fixture: ComponentFixture<BuscadetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
