import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type call_for_papers = {
    id: Generated<string>;
    conference_id: string | null;
    content: string | null;
    link: string | null;
    avg_rating: number | null;
    owner: string | null;
    view_count: string | null;
    location: string | null;
    country: string | null;
    start_date: Timestamp | null;
    end_date: Timestamp | null;
    access_type: string | null;
    status: boolean | null;
};
export type conference_rank_footprints = {
    id: Generated<string>;
    conference_id: string | null;
    rank_id: string | null;
    for_id: string | null;
    year: string | null;
};
export type conferences = {
    id: Generated<string>;
    name: string | null;
    acronym: string | null;
};
export type crawl_jobs = {
    id: Generated<string>;
    conference_id: string | null;
    type: string | null;
    progress_percent: number | null;
    progress_detail: string | null;
    duration: number | null;
    status: string | null;
    created_at: Timestamp | null;
    updated_at: Timestamp | null;
};
export type error_conferences = {
    id: Generated<string>;
    error_type: string | null;
    error_message: string | null;
    conference_id: string | null;
    created_at: Timestamp | null;
    updated_at: Timestamp | null;
};
export type for_division = {
    id: Generated<string>;
    code: string | null;
    name: string | null;
};
export type for_group = {
    id: Generated<string>;
    code: string | null;
    name: string | null;
    division_id: string | null;
};
export type important_dates = {
    id: Generated<string>;
    cfp_id: string | null;
    date_type: string | null;
    date_value: Timestamp | null;
    status: string | null;
};
export type journal_rank_footprints = {
    id: Generated<string>;
    journal_id: string | null;
    rank_id: string | null;
    for_id: string | null;
    year: string | null;
};
export type journals = {
    id: Generated<string>;
    country: string | null;
    name: string | null;
    issn: string | null;
    h_index: string | null;
    publisher: string | null;
    scope: string | null;
    home_page: string | null;
    email_submission: string | null;
};
export type rank_of_cfp = {
    id: Generated<string>;
    rank_id: string | null;
    cfp_id: string | null;
    year: string | null;
    for_group_id: string | null;
};
export type source_ranks = {
    id: Generated<string>;
    source_id: string | null;
    rank: string | null;
    value: string | null;
};
export type sources = {
    id: Generated<string>;
    name: string | null;
    link: string | null;
};
export type DB = {
    call_for_papers: call_for_papers;
    conference_rank_footprints: conference_rank_footprints;
    conferences: conferences;
    crawl_jobs: crawl_jobs;
    error_conferences: error_conferences;
    for_division: for_division;
    for_group: for_group;
    important_dates: important_dates;
    journal_rank_footprints: journal_rank_footprints;
    journals: journals;
    rank_of_cfp: rank_of_cfp;
    source_ranks: source_ranks;
    sources: sources;
};
