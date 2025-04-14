import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMailComponent } from './contact-mail.component';

describe('ContactMailComponent', () => {
  let component: ContactMailComponent;
  let fixture: ComponentFixture<ContactMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
