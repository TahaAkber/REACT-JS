import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      className="about-p1"
    >
      <div className="about-p2">
        <img
          src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car Photo"
          width="auto"
          height="800px"
        />
        <div className="about-p3">
          <h3>ABOUT US</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            consectetur exercitationem hic ullam ex quas iure sit. Officia
            assumenda porro aspernatur voluptates quaerat blanditiis quis dolore
            esse. Debitis soluta ea ullam a sint adipisci pariatur nam error
            distinctio saepe nostrum enim mollitia sed, corrupti illum. Magnam
            eligendi quidem cumque! Quaerat nesciunt tenetur inventore saepe
            iusto tempora consectetur voluptatum aliquid, cumque porro harum
            totam ducimus nobis repellendus non dolorem voluptates illo velit
            corrupti voluptas doloribus sunt provident unde asperiores? Eius,
            quia, et facilis hic commodi neque sapiente, architecto tempore
            similique voluptas eos? Ducimus perferendis nemo ullam autem ipsa
            quae sit quaerat facilis adipisci earum necessitatibus ab corporis
            tempore quibusdam assumenda numquam odit, hic maiores dicta, non
            quasi? Excepturi voluptatem ipsam mollitia amet recusandae!
            Provident assumenda unde atque esse inventore veritatis sed aliquam,
            neque veniam reiciendis minima, sapiente, magnam ullam ad! Hic
            expedita corporis nobis animi ab fugiat possimus quos, ducimus sequi
            laudantium officia saepe rem optio ad doloremque. Vero vitae
            perferendis aspernatur ad perspiciatis, molestiae consequatur sit
            distinctio nulla suscipit impedit aliquid, excepturi itaque,
            similique id. Possimus esse iusto in ab. Repellendus aspernatur
            cupiditate pariatur. Saepe fugit rem eius delectus ut ducimus
            sapiente obcaecati eligendi, assumenda porro similique dolore
            suscipit quidem modi deleniti numquam molestias! Laudantium natus,
            quia necessitatibus magni optio iusto eligendi maiores ut voluptate
            aperiam quasi eius corporis dolor delectus maxime perferendis
            similique officia obcaecati sapiente cum sequi perspiciatis expedita
            repellendus quis! Eligendi nobis similique qui sint quaerat id
            maxime velit, pariatur laboriosam eveniet sed labore nesciunt
            maiores beatae voluptas! Cupiditate impedit molestias itaque labore
            in dolores ducimus rerum modi amet. Officiis repellendus accusantium
            nulla neque quam reprehenderit beatae sapiente debitis ea totam
            incidunt deleniti recusandae eum repellat explicabo eveniet ad
            pariatur, vero nisi? Dolorem labore ab fuga, iure eaque mollitia
            expedita obcaecati culpa blanditiis facilis? Animi enim voluptatem
            fuga natus, asperiores mollitia, aperiam itaque et expedita eum illo
            error totam quam sunt magni eaque dolore, debitis tenetur placeat
            soluta ullam eligendi adipisci. Ratione quaerat modi dolorum vero
            cupiditate asperiores porro possimus aut voluptatibus sit
            perferendis, nesciunt enim tenetur sint laborum quasi cum nostrum!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
