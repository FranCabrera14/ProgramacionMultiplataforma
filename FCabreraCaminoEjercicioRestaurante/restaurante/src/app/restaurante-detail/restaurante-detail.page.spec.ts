import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestauranteDetailPage } from './restaurante-detail.page';

describe('RestauranteDetailPage', () => {
  let component: RestauranteDetailPage;
  let fixture: ComponentFixture<RestauranteDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
