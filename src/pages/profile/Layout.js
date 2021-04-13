import React, { useEffect, useState } from 'react';
export default function Layout({ children }) {

  useEffect(() => {
    window.location.reload()
  }, [])
  return {children};
}
