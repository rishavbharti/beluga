'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [injectedObject, setInjectedObject] = useState();

  useEffect(() => {
    if (window?.ReactNativeWebView?.injectedObjectJson()) {
      const customValue = JSON.parse(
        window.ReactNativeWebView.injectedObjectJson()
      ).customValue;

      setInjectedObject(customValue);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>{injectedObject || 'Injected Object will display here.'}</h2>
      </div>
    </main>
  );
}
