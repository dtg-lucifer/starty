"use server";

import { writeClient } from "~/sanity/lib/write-client";

export async function incrementViews(id: string, currentViews: number) {
  try {
    await writeClient
      .patch(id)
      .set({ views: currentViews + 1 })
      .commit();

    return { success: true };
  } catch (error) {
    console.error("Failed to increment views:", error);
    return { success: false, error };
  }
}
