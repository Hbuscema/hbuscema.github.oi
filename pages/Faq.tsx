import Image from "next/image";
import styles from "../styles/Home.module.css";

const Faq = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.heroBackgroundInner}>
                        <Image
                            src="/hero-gradient.png"
                            width={1390}
                            height={1390}
                            alt="Background gradient from red to blue"
                            quality={100}
                            className={styles.gradient}
                        />
                    </div>
                </div>
            <div className={styles.heroAssetFrame}>
                <Image
                src="/FAQ.png"
                width={860}
                height={540}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
                />
            </div>
            <div className={styles.heroBodyContainer}>
                <div className={styles.heroBody}>
                    <p className={styles.heroTitleFAQ}>
                        1. What is an NFT marketplace?
                    </p>
                    <p className={styles.heroSubtitle}>
                        An NFT marketplace is an online platform where users can buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that represent ownership of digital or physical items.
                    </p>
                    <p className={styles.heroTitleFAQ}>
                        2. How do I get started with buying NFTs?
                    </p>
                    <p className={styles.heroSubtitle}>
                        To buy NFTs, you typically need to create an account on the NFT marketplace, connect a digital wallet, and browse the available NFT listings. Once you find one you like, you can place a bid or make a direct purchase.
                    </p>
                    <p className={styles.heroTitleFAQ}>
                        3. What is a digital wallet, and why do I need one?
                    </p>
                    <p className={styles.heroSubtitle}>
                        A digital wallet is essential for storing and managing your NFTs. It acts as a secure place to store your NFTs and interact with the marketplace. You'll need one to make purchases, receive NFTs, and manage your collections. 
                    </p>
                    <p className={styles.heroTitleFAQ}>
                        4. What can I buy on an NFT marketplace?
                    </p>
                    <p className={styles.heroSubtitle}>
                        NFT marketplaces feature a wide range of digital assets, including digital art, music, collectibles, virtual real estate, in-game items, and more. Some marketplaces also support physical items with attached NFTs.
                    </p>
                    <p className={styles.heroTitleFAQ}>
                        5. Are NFTs and cryptocurrencies the same thing?
                    </p>
                    <p className={styles.heroSubtitle}>
                        No, NFTs and cryptocurrencies are different. NFTs represent ownership of unique digital or physical items, while cryptocurrencies are digital assets used for transactions and store of value. They are often built on blockchain technology, but their purposes vary.
                    </p>
                    <p className={styles.heroTitleFAQ}>
                        6. How can I verify the authenticity of an NFT?
                    </p>
                    <p className={styles.heroSubtitle}>
                        You can verify the authenticity of an NFT by checking the blockchain where it's minted. Each NFT has a unique digital signature that can be traced back to the original creator and the blockchain's transaction history.
                    </p>
                    <p className={styles.heroTitleFAQ}>
                        7. Is it safe to buy NFTs on a marketplace?
                    </p>
                    <p className={styles.heroSubtitle}>
                        Generally, NFT marketplaces are secure, but it's essential to exercise caution. Stick to reputable marketplaces, do your research on the NFTs and creators, and be aware of potential scams. Always use secure digital wallets.    
                    </p>    
                    <p className={styles.heroTitleFAQ}>
                        8. Can I resell NFTs I've purchased on the marketplace?
                    </p>
                    <p className={styles.heroSubtitle}>
                        Yes, many NFT marketplaces allow you to resell NFTs you've purchased. You can list them for sale at your preferred price, and others can buy them from you.
                    </p>    
                    <p className={styles.heroTitleFAQ}>
                        9. Are there any fees associated with NFT transactions?
                    </p>
                    <p className={styles.heroSubtitle}>
                        Yes, there may be fees for creating, buying, and selling NFTs. These fees can include minting fees, gas fees (on Ethereum-based platforms), and marketplace transaction fees. Be sure to understand the fee structure on the specific marketplace you're using.
                    </p>    
                    <p className={styles.heroTitleFAQ}>
                        10. What happens if I lose access to my digital wallet?
                    </p>
                    <p className={styles.heroSubtitle}>
                        If you lose access to your wallet, you may lose access to your NFTs. It's crucial to keep your wallet information and recovery phrases in a secure place to prevent this from happening.
                    </p>    
                    <p className={styles.heroTitleFAQ}>
                        11. What blockchain networks are commonly used for NFTs, and how does Polygon fit in?
                    </p>
                    <p className={styles.heroSubtitle}>
                        While Ethereum remains a popular choice for NFTs, Polygon (formerly known as Matic) has gained prominence in the NFT space. Polygon is recognized for its low transaction fees and scalability, making it an appealing alternative to Ethereum for minting and trading NFTs. Its environmentally friendly approach to blockchain technology has also contributed to its increasing adoption.
                    </p>    

                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default Faq;