import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantePage } from './restaurante.page';

describe('RestaurantePage', () => {
  let component: RestaurantePage;
  let fixture: ComponentFixture<RestaurantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
