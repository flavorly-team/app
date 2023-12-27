import { Favorite } from "./Favorite";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const FavoriteContainer = () => {
  return <Favorite />;
};
