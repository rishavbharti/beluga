'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [injectedObject, setInjectedObject] = useState();

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      if (window?.ReactNativeWebView?.injectedObjectJson()) {
        const customValue = JSON.parse(
          // @ts-ignore
          window.ReactNativeWebView.injectedObjectJson()
        ).customValue;

        setInjectedObject(customValue);
      }
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>{injectedObject || 'Injected Object will display here.'}</h2>
      </div>
    </main>
  );
}
