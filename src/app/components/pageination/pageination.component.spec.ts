import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinationComponent } from './pageination.component';

describe('PageinationComponent', () => {
  let component: PageinationComponent;
  let fixture: ComponentFixture<PageinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
