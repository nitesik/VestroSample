import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {
  Hide,
  Report,
  Send,
  Unfollow,
  arrow_down,
  comment,
  discover,
  heart,
  image,
  like,
  multiply,
  multiplyDark,
  notification,
  option,
  postHidden,
  profilePicture,
  search,
  share,
  shareFeed,
  shareFriends,
  shareNow,
  success,
  video,
} from "../../lib/icons";
import profileImg from "../../../public/Profile1.png";
import { data } from "../../lib/data";
import profileData from "../../lib/profileData";

function UnfollowHandler({
  unfollowScreen,
  setUnfollowScreen,
}: {
  unfollowScreen: boolean | null;
  setUnfollowScreen: React.Dispatch<React.SetStateAction<boolean | null>>;
}) {
  if (!unfollowScreen || unfollowScreen === null) return;

  return (
    <div className={styles.popup}>
      <div
        onClick={() => setUnfollowScreen(null)}
        className={styles.popupBackground}
      ></div>
      <div className={styles.popupContent}>
        <h1>Unfollow @hamzaanjum?</h1>
        <p>Their posts will no longer show up in your feed</p>
        <div>
          <button onClick={() => setUnfollowScreen(null)}>Cancel</button>
          <button
            onClick={() => setUnfollowScreen(null)}
            style={{ borderColor: "#CC1F29", color: "#CC1F29" }}
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
}

function FollowScreen({
  followScreen,
  setFollowScreen,
}: {
  followScreen: boolean | null;
  setFollowScreen: React.Dispatch<React.SetStateAction<boolean | null>>;
}) {
  const [data, setData] = useState(profileData);
  const [_, setButton] = useState(false);

  useEffect(() => {
    console.log(data);
  });

  if (!followScreen || followScreen === null) return;

  return (
    <div className={styles.popup}>
      <div
        onClick={() => setFollowScreen(null)}
        className={styles.popupBackground}
      ></div>
      <div className={styles.sendPopup}>
        <div className={styles.top}>
          <h1>Send to</h1>
          <Image
            onClick={() => setFollowScreen(null)}
            src={multiplyDark}
            height={24}
            width={24}
            alt="close"
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.search}>
            <Image src={search} width={24} height={24} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.scroll}>
            {data.map((item, index) => (
              <div key={index}>
                <div>
                  <Image src={item.pic} width={48} height={48} alt="profile" />
                  <div>
                    <h1>Lorem Ipsum</h1>
                    <p>UX/UI Design</p>
                  </div>
                </div>
                <button
                  style={item.sent ? { backgroundColor: "#222222" } : {}}
                  onClick={() => {
                    const obj = data;
                    obj[index].sent = true;
                    setData(obj);
                    setButton((prev) => !prev);
                  }}
                >
                  {item.sent ? "Sent" : "Send"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PostSharedScreen({
  postSharedScreen,
  setPostSharedScreen
}: {
  postSharedScreen: boolean | null;
  setPostSharedScreen: React.Dispatch<React.SetStateAction<boolean | null>>
}) {
  if (postSharedScreen === null) return;

  return (
    <div>
      <div className={styles.popup}>
        <div onClick={() => setPostSharedScreen(null)} className={styles.popupBackground}></div>
        <div className={styles.postShared}>
          <Image src={success} width={60} height={60} alt="success" />
          <h1>Post Shared</h1>
          <p>Post shared on your profile</p>
        </div>
      </div>
    </div>
  );
}

function ReportIssue({ reportIssue, setReportIssue }: { reportIssue: number | null, setReportIssue: React.Dispatch<React.SetStateAction<number | null>> }) {

  if (reportIssue === null) return;

  return (
    <div>
      <div className={styles.popup}>
        <div onClick={() => setReportIssue(null)} className={styles.popupBackground}></div>
        {reportIssue === 1 ? <div className={styles.reportIssue1}>
          <div className={styles.top}>
            <h1>Report an issue</h1>
            <Image onClick={() => setReportIssue(null)} src={multiplyDark} width={24} height={24} alt="" />
          </div>
          <div className={styles.mid}>
            <div>
              <input type="radio" />
              <h1>It&apos;s spam</h1>
            </div>
            <div>
              <input type="radio" />
              <h1>False Information</h1>
            </div>
            <div>
              <input type="radio" />
              <h1>Not interested in this</h1>
            </div>
          </div>
          <div className={styles.bot}>
            <button onClick={() => setReportIssue(null)}>Cancel</button>
            <button  onClick={() => setReportIssue(2)}>Report</button>
          </div>
          
        </div> : <div className={styles.reportIssue2}>
          <h1>Thanks for reporting this post</h1>
          <p>You reported this post.</p>
          <button onClick={() => setReportIssue(null)}>Done</button>
        </div>}
      </div>
    </div>
  );

}

export default function Homepage() {
  const [isPost1Visible, setIsPost1Visible] = useState(true);
  const [isPost2Visible, setIsPost2Visible] = useState(true);
  const [unfollowScreen, setUnfollowScreen] = useState<boolean | null>(null);
  const [followScreen, setFollowScreen] = useState<boolean | null>(null);
  const [postSharedScreen, setPostSharedScreen] = useState<boolean | null>(null);
  const [reportIssue, setReportIssue] = useState<number | null>(null);

  return (
    <div className={styles.content}>
      <nav>
        <span></span>
        <span className={styles.search}>
          <Image src={search} alt="search" width={24} height={24} />{" "}
          <input type="text" placeholder="Search" />
        </span>
        <span className={styles.right}>
          <Image src={notification} alt="notification" width={32} height={32} />
          <hr />
          <Image src={profilePicture} alt="profile" width={32} height={32} />
        </span>
      </nav>
      <div className={styles.outerExchange}>
        <div className={styles.exchange}>
          {data.map((item, index) => (
            <span key={index}>
              <div>
                <p>{item.currency}</p>
                <h1>{item.money}</h1>
                <h2>{item.percent}</h2>
              </div>
              <Image src={item.image} width={72} height={20} alt="graph" />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.card}>
            <div className={styles.background}></div>
            <div className={styles.middle}>
              <Image
                src={profilePicture}
                width={80}
                height={80}
                alt="picture"
              />
              <h1>Hamza Anjum</h1>
              <p>UX/UI Designer</p>
              <p>Creative Studio PK</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.leftChild}>
                <h1>1.6k</h1>
                <p>Followers</p>
              </div>
              <div>
                <h1>900</h1>
                <p>Following</p>
              </div>
            </div>
          </div>

          <div className={styles.member}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
            </p>
            <button>Become a member</button>
          </div>

          <div className={styles.news}>
            <h1>Today&apos;s News</h1>
            <div>
              {new Array(4).fill(0).map((_, index) => (
                <div key={index}>
                  <h3>Lorem Ipsum: Dolor Sit</h3>
                  <span>
                    <p>1hr ago</p>
                    <p>•</p>
                    <p>Public</p>
                  </span>
                </div>
              ))}
            </div>

            <span>
              <h2>Read more</h2>
              <Image src={arrow_down} height={14} width={14} alt="arrow" />
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.post}>
            <div className={styles.top}>
              <Image src={profilePicture} width={40} height={40} alt="pic" />
              <input type="text" placeholder="What's on your mind?" />
            </div>
            <div className={styles.bottom}>
              <div>
                <div>
                  <Image src={image} width={20} height={16} alt="image" />
                  <p>Add photo</p>
                </div>
                <div>
                  <Image src={video} width={20} height={14} alt="video" />
                  <p>Add video</p>
                </div>
              </div>
              <button>Post</button>
            </div>
          </div>

          {isPost1Visible ? (
            <div className={styles.feed}>
              <div className={styles.top}>
                <div>
                  <Image
                    src={profilePicture}
                    width={40}
                    height={40}
                    alt="profile"
                  />
                  <div>
                    <h1>Hamza Anjum</h1>
                    <p>12hrs ago. Public</p>
                  </div>
                </div>
                <button className={styles.feedOption}>
                  <Image src={option} width={20} height={5} alt="option" />
                  <div className={styles.feed1Option}>
                    <div onClick={() => setIsPost1Visible(false)}>
                      <Image src={Hide} height={24} width={24} alt="post" />{" "}
                      <p>Hide Post</p>
                    </div>
                    <div onClick={() => setReportIssue(1)}>
                      <Image src={Report} height={24} width={24} alt="post" />{" "}
                      <p>Report Post</p>
                    </div>
                    <div onClick={() => setUnfollowScreen(true)}>
                      <Image src={Unfollow} height={24} width={24} alt="post" />{" "}
                      <p>Unfollow Post</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.imagePosted}></div>
              <div className={styles.bottom}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                  mollis volutpat sed amet. Nisl magna egestas ornare id eget
                  faucibus urna. Magna orci, sempe
                </p>
                <div className={styles.reacts}>
                  <div>
                    <Image src={heart} height={16} width={16} alt="heart" />
                    <p>2.4k</p>
                  </div>
                  <div style={{ color: "#465D61" }}>3 comments 1 share</div>
                </div>
                <div className={styles.likes}>
                  <div>
                    <Image src={like} height={20} width={20} alt="like" />
                    <p>Like</p>
                  </div>
                  <div>
                    <Image src={comment} height={20} width={20} alt="like" />
                    <p>Comment</p>
                  </div>
                  <button className={styles.feedOption}>
                    <Image src={share} height={20} width={20} alt="like" />
                    <p>Share</p>
                    <div
                      className={styles.feed1Option}
                      style={{
                        marginTop: 180,
                        marginLeft: 100,
                        padding: "12px 20px",
                      }}
                    >
                      <div onClick={() => setPostSharedScreen(true)}>
                        <Image
                          src={shareNow}
                          height={24}
                          width={24}
                          alt="post"
                        />{" "}
                        <p>Share Now</p>
                      </div>
                      <div onClick={() => setFollowScreen(true)}>
                        <Image
                          src={shareFeed}
                          height={24}
                          width={24}
                          alt="post"
                        />{" "}
                        <p>Share to feed</p>
                      </div>
                      <div onClick={() => setFollowScreen(true)}>
                        <Image
                          src={shareFriends}
                          height={24}
                          width={24}
                          alt="post"
                        />{" "}
                        <p>Share to friends</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className={styles.send}>
                  <Image
                    src={profilePicture}
                    alt="profile"
                    height={40}
                    width={40}
                  />
                  <input type="text" placeholder="Write a comment" />
                  <Image src={Send} width={20} height={20} alt="send" />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.postHidden}>
              <div>
                <Image src={postHidden} width={24} height={24} alt="hidden" />
                <div>
                  <h1>Post Hidden</h1>
                  <p>You won&apos;t see this post on your timeline</p>
                </div>
              </div>
              <Image
                src={multiply}
                width={24}
                height={24}
                alt="close"
                onClick={() => setIsPost1Visible(true)}
              />
            </div>
          )}


          {isPost2Visible ? (
            <div className={styles.feed}>
              <div className={styles.top}>
                <div>
                  <Image
                    src={profilePicture}
                    width={40}
                    height={40}
                    alt="profile"
                  />
                  <div>
                    <h1>Hamza Anjum</h1>
                    <p>12hrs ago. Public</p>
                  </div>
                </div>
                <button className={styles.feedOption}>
                  <Image src={option} width={20} height={5} alt="option" />
                  <div className={styles.feed1Option}>
                    <div onClick={() => setIsPost2Visible(false)}>
                      <Image src={Hide} height={24} width={24} alt="post" />{" "}
                      <p>Hide Post</p>
                    </div>
                    <div onClick={() => setReportIssue(1)}>
                      <Image src={Report} height={24} width={24} alt="post" />{" "}
                      <p>Report Post</p>
                    </div>
                    <div onClick={() => setUnfollowScreen(true)}>
                      <Image src={Unfollow} height={24} width={24} alt="post" />{" "}
                      <p>Unfollow Post</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.imagePosted}></div>
              <div className={styles.bottom}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                  mollis volutpat sed amet. Nisl magna egestas ornare id eget
                  faucibus urna. Magna orci, sempe
                </p>
                <div className={styles.reacts}>
                  <div>
                    <Image src={heart} height={16} width={16} alt="heart" />
                    <p>2.4k</p>
                  </div>
                  <div style={{ color: "#465D61" }}>3 comments 1 share</div>
                </div>
                <div className={styles.likes}>
                  <div>
                    <Image src={like} height={20} width={20} alt="like" />
                    <p>Like</p>
                  </div>
                  <div>
                    <Image src={comment} height={20} width={20} alt="like" />
                    <p>Comment</p>
                  </div>
                  <button className={styles.feedOption}>
                    <Image src={share} height={20} width={20} alt="like" />
                    <p>Share</p>
                    <div
                      className={styles.feed1Option}
                      style={{
                        marginTop: 180,
                        marginLeft: 100,
                        padding: "12px 20px",
                      }}
                    >
                      <div onClick={() => setPostSharedScreen(true)}>
                        <Image
                          src={shareNow}
                          height={24}
                          width={24}
                          alt="post"
                        />{" "}
                        <p>Share Now</p>
                      </div>
                      <div onClick={() => setFollowScreen(true)}>
                        <Image
                          src={shareFeed}
                          height={24}
                          width={24}
                          alt="post"
                        />{" "}
                        <p>Share to feed</p>
                      </div>
                      <div onClick={() => setFollowScreen(true)}>
                        <Image
                          src={shareFriends}
                          height={24}
                          width={24}
                          alt="post"
                        />{" "}
                        <p>Share to friends</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className={styles.send}>
                  <Image
                    src={profilePicture}
                    alt="profile"
                    height={40}
                    width={40}
                  />
                  <input type="text" placeholder="Write a comment" />
                  <Image src={Send} width={20} height={20} alt="send" />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.postHidden}>
              <div>
                <Image src={postHidden} width={24} height={24} alt="hidden" />
                <div>
                  <h1>Post Hidden</h1>
                  <p>You won&apos;t see this post on your timeline</p>
                </div>
              </div>
              <Image
                src={multiply}
                width={24}
                height={24}
                alt="close"
                onClick={() => setIsPost2Visible(true)}
              />
            </div>
          )}
        </div>
      </div>

      <UnfollowHandler
        unfollowScreen={unfollowScreen}
        setUnfollowScreen={setUnfollowScreen}
      />
      <FollowScreen
        followScreen={followScreen}
        setFollowScreen={setFollowScreen}
      />
      <PostSharedScreen postSharedScreen={postSharedScreen} setPostSharedScreen={setPostSharedScreen} />
      <ReportIssue reportIssue={reportIssue} setReportIssue={setReportIssue} />
    </div>
  );
}
