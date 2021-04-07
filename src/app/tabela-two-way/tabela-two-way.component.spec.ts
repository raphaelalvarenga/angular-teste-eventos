import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTwoWayComponent } from './tabela-two-way.component';

describe('TabelaTwoWayComponent', () => {
  let component: TabelaTwoWayComponent;
  let fixture: ComponentFixture<TabelaTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaTwoWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
