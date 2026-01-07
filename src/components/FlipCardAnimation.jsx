import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import './FlipCardAnimation.css';

// Register GSAP plugins
gsap.registerPlugin(Flip);

const users = [
  {
    title: "Education",
    details: {
      secondary: "Building Knowledge Foundation",
      text: "Education is the cornerstone of HOPE3's mission. We provide comprehensive learning opportunities that empower students with the knowledge and skills needed for success in their chosen fields.",
      image: "/src/assets/education.jpeg"
    }
  },
  {
    title: "Empowerment",
    details: {
      secondary: "Unlocking Potential",
      text: "Empowerment through mentorship and guidance. HOPE3 believes in nurturing individual strengths and helping students discover their unique talents and capabilities.",
      image: "/src/assets/empowerment.jpeg"
    }
  },
  {
    title: "Entrepreneurship",
    details: {
      secondary: "Innovation & Leadership",
      text: "Fostering entrepreneurial spirit and innovation. We encourage students to think creatively, take initiative, and develop leadership skills that will serve them throughout their careers.",
      image: "/src/assets/enterpreneurship.jpeg"
    }
  },
  {
    title: "Journey",
    details: {
      secondary: "Transformation Process",
      text: "Every student's journey is unique. HOPE3 provides personalized support and guidance throughout the educational journey, ensuring each student reaches their full potential.",
      image: "/src/assets/transformation/img1.jpeg"
    }
  },
  {
    title: "Growth",
    details: {
      secondary: "Personal Development",
      text: "Personal and professional growth through structured learning. Our programs are designed to challenge students while providing the support they need to succeed.",
      image: "/src/assets/transformation/img2.jpeg"
    }
  },
  {
    title: "Community",
    details: {
      secondary: "Building Connections",
      text: "Creating a supportive community of learners, mentors, and alumni. HOPE3 fosters lasting relationships that extend beyond the classroom experience.",
      image: "/src/assets/transformation/img3.jpeg"
    }
  },
  {
    title: "Innovation",
    details: {
      secondary: "Future-Ready Skills",
      text: "Preparing students for the future with cutting-edge technology and innovative teaching methods. We stay ahead of industry trends to ensure our students are job-ready.",
      image: "/src/assets/transformation/img4.jpeg"
    }
  },
  {
    title: "Success",
    details: {
      secondary: "Achieving Goals",
      text: "Celebrating achievements and milestones. HOPE3 measures success not just in grades, but in the personal growth and confidence our students gain.",
      image: "/src/assets/transformation/img5.jpeg"
    }
  },
  {
    title: "Future",
    details: {
      secondary: "Bright Possibilities",
      text: "Building a brighter future for all students. HOPE3 is committed to creating opportunities that lead to meaningful careers and positive impact in society.",
      image: "/src/assets/transformation/img6.jpeg"
    }
  }
];

const FlipCardAnimation = () => {
  const appRef = useRef(null);
  const chosenRef = useRef(null);
  const chosenDetailsRef = useRef(null);
  const chosenImageRef = useRef(null);
  const chosenNameRef = useRef(null);
  const chosenAliasesRef = useRef(null);
  const chosenDescriptionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeItem, setActiveItem] = useState(null);

  const showDetails = (card) => {
    if (activeItem) {
      hideDetails();
    }

    const cards = gsap.utils.toArray(".user-card");
    const onLoad = () => {
      Flip.fit(chosenRef.current, card, {
        scale: true,
        fitChild: chosenImageRef.current
      });

      const state = Flip.getState(chosenRef.current);
      gsap.set(chosenRef.current, { clearProps: true });
      gsap.set(chosenRef.current, {
        xPercent: -50,
        top: "50%",
        yPercent: -50,
        visibility: "visible",
        overflow: "hidden"
      });

      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true,
        onComplete: () => {
          gsap.set(chosenDetailsRef.current, { overflow: "auto" });
        }
      }).to(chosenDetailsRef.current, { xPercent: 0 }, 0.2);

      chosenImageRef.current.removeEventListener("load", onLoad);
      document.addEventListener("click", hideDetails);
    };

    const data = card.dataset;
    if (chosenImageRef.current) {
      chosenImageRef.current.addEventListener("load", onLoad);
      chosenImageRef.current.src = card.querySelector("img").src;
    }

    if (chosenNameRef.current) chosenNameRef.current.textContent = data.title || "";
    if (chosenAliasesRef.current) chosenAliasesRef.current.textContent = data.secondary || "";
    if (chosenDescriptionRef.current) chosenDescriptionRef.current.textContent = data.text || "";

    gsap.to(cards, {
      opacity: 0.3,
      stagger: {
        amount: 0.7,
        from: cards.indexOf(card),
        grid: "auto"
      }
    }).kill(card);

    gsap.to(appRef.current, { backgroundColor: "#888", duration: 1, delay: 0.3 });
    setActiveItem(card);
  };

  const hideDetails = () => {
    if (activeItem) {
      document.removeEventListener("click", hideDetails);
      const cards = gsap.utils.toArray(".user-card");
      const state = Flip.getState(chosenRef.current);

      Flip.fit(chosenRef.current, activeItem, {
        scale: true,
        fitChild: chosenImageRef.current
      });

      const tl = gsap.timeline();
      tl.set(chosenRef.current, { overflow: "hidden" })
        .to(chosenDetailsRef.current, { xPercent: -100 })
        .to(cards, {
          opacity: 1,
          stagger: {
            amount: 0.2,
            from: cards.indexOf(activeItem),
            grid: "auto"
          }
        })
        .to(appRef.current, { backgroundColor: "#fff" }, "<");

      Flip.from(state, {
        scale: true,
        duration: 0.5,
        delay: 0.2,
        onInterrupt: () => tl.kill()
      }).set(chosenRef.current, { visibility: "hidden" });

      setActiveItem(null);
    }
  };

  // Intro animation
  useEffect(() => {
    if (imagesLoaded !== users.length) return;

    const cards = gsap.utils.toArray(".user-card");
    gsap.to(appRef.current, { autoAlpha: 1, duration: 0.2 });
    gsap.from(cards, {
      autoAlpha: 0,
      stagger: 0.04,
      yPercent: 30
    });
  }, [imagesLoaded]);

  useEffect(() => {
    gsap.set(chosenDetailsRef.current, { xPercent: -100 });
  }, []);

  return (
    <div className="flip-app" ref={appRef}>
      <div
        className="loading"
        style={{ display: imagesLoaded === users.length ? "none" : "block" }}
      >
        Loading...
      </div>

      <div className="card-board">
        {users.map((user, i) => (
          <div
            key={i}
            className="user-card"
            data-title={user.title}
            data-secondary={user.details.secondary}
            data-text={user.details.text}
            onClick={(e) => showDetails(e.currentTarget)}
          >
            <img
              src={user.details.image}
              alt={user.title}
              onLoad={() => setImagesLoaded((prev) => prev + 1)}
            />
            <div className="card-overlay">
              <h3 className="card-title">{user.title}</h3>
              <p className="card-subtitle">{user.details.secondary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chosen" ref={chosenRef}>
        <div className="chosen__image">
          <img ref={chosenImageRef} onClick={() => hideDetails()} alt="Selected" />
        </div>
        <div className="chosen__details" ref={chosenDetailsRef}>
          <div className="chosen__details__name" ref={chosenNameRef}>
            Placeholder Name
          </div>
          <div className="chosen__details__aliases" ref={chosenAliasesRef}>
            Placeholder Aliases
          </div>
          <div
            className="chosen__details__description"
            ref={chosenDescriptionRef}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum,
            est amet delectus, blanditiis voluptatem laborum pariatur
            consequatur quae voluptate, nisi. Laborum adipisci iste earum
            distinctio, fugit, quas ipsa impedit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCardAnimation;