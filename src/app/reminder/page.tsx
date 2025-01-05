"use client";

import { useSession } from "next-auth/react";
import Layout from "../../component/Layout/layout";

export default function ReminderPage() {
  useSession();

  return (
    <Layout>
      <h1>Reminder Page</h1>
      <p>Only admin users can see this page.</p>
    </Layout>
  );
}
