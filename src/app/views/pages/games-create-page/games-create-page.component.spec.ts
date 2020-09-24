import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCreatePageComponent } from './games-create-page.component';

describe('GamesCreatePageComponent', () => {
  let component: GamesCreatePageComponent;
  let fixture: ComponentFixture<GamesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
