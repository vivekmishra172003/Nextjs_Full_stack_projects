"use-client"
import { useRouter } from "next/router";

export default function ProductDetail() {
    const router = useRouter();
    const {productId} = router.query; 
    return <h1>Details about the product</h1>;
  }