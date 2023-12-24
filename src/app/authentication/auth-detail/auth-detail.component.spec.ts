import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDetailComponent } from './auth-detail.component';

describe('AuthDetailComponent', () => {
  let component: AuthDetailComponent;
  let fixture: ComponentFixture<AuthDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
