export interface IRoot {
    version: string;
    status_code: number;
    status_message: string;
    time: string;
    cost: number;
    tasks_count: number;
    tasks_error: number;
    tasks: Task[];
  }
  
  export interface Task {
    id: string;
    status_code: number;
    status_message: string;
    time: string;
    cost: number;
    result_count: number;
    path: string[];
    data: Data;
    result: any;
  }
  
  export interface Data {
    api: string;
    function: string;
    target: string;
    max_crawl_pages: number;
    load_resources: boolean;
    enable_javascript: boolean;
  }