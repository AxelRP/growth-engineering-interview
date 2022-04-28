import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../environments/environment";
import {AnonIdService} from "./anon-id.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private supabase: SupabaseClient;

  constructor(
    private anonIdSvc: AnonIdService
  ) {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  async registerPageView(href: string) {
    const { data, error } = await this.supabase
      .from('page_views')
      .insert({
        anon_id: this.anonIdSvc.anonId,
        href
      })
    if (error) {
      console.error('Supabase insert page view error:', error)
    } else {
      console.log('Page view event registered:', href);
    }
    return !error;
  }

  async registerFormEvent(form: any) {
    const { data, error } = await this.supabase
      .from('form_submissions')
      .insert({
        anon_id: this.anonIdSvc.anonId,
        ...form
      })
    if (error) {
      console.error('Supabase insert form submission error:', error)
    } else {
      console.log('Form submission registered:', form);
    }
    return !error;
  }
}
