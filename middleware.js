// middleware.js
import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.next(); // همه درخواست‌ها را عبور بده
}
