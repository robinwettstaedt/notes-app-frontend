import { NoteType } from './noteTypes';

export type NotebookType = {
  _id: string;
  title: string;
  color: NotebookColor;
  hasAccess: NotebookAccessType[];
  createdBy: NotebookAccessType;
  notes?: NotebookNoteType[];
  deleted: boolean;
  deletedAt?: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NotebookAccessType = {
  _id: string;
  email?: string;
  firstName?: string;
  picture?: string;
};

// have a look at how to structure them as they are filled by the APIs .populate mongoose method
export type NotebookNoteType = {
  _id: string;
  //rest optional, maybe title etc
};

export type CreateNotebookType = {
  title: string;
  color: NotebookColor;
};

export type UpdateNotebookType = {
  title?: string;
  color?: NotebookColor;
  hasAccess?: NotebookAccessType[];
  notes?: NotebookNoteType;
  deleted?: boolean;
  visible?: boolean;
};

enum NotebookColor {
  RED = '#ffffff',
  ORANGE = '#ffffff',
  YELLOW = '#ffffff',
  GREEN = '#ffffff',
  BLUE = '#ffffff',
  CYAN = '#ffffff',
  PURPLE = '#ffffff',
  WHITE = '#ffffff',
  BROWN = '#ffffff',
  OLIVE = '#ffffff',
  TURQUOISE = '#ffffff',
  LIME = '#ffffff',
  PINK = '#ffffff',
  GRAY = '#ffffff',
  PEACH = '#ffffff',
}
