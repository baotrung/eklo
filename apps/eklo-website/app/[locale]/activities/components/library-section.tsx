import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { StarSvg } from "@/components/star-svg";
import { Button } from "@/components/ui";
import classNames from "classnames";
import Link from "next/link";
import styles from "./library-section.module.scss";
import { LibraryLogo } from "./logo/library-logo";

export const LibrarySection = () => {
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <LibraryLogo className={styles.logo} />
      <h3 className={styles.title}>Thư viện đa phương tiện</h3>
      <p>
        Thư viện đa phương tiện EKLO là một forum « mở », lưu giữ những đầu
        sách, những bộ phim hay bất cứ tác phẩm nghệ thuật nào đáng đọc, đáng
        xem và đáng suy ngẫm từ chia sẻ của chính những bạn theo dõi EKLO. Tuy
        nhiên, khác với những review đơn thuần mà bạn có thể bắt gặp ở bất cứ
        đâu, Thư viện đa phương tiện EKLO tập trung vào những tác phẩm có ý
        nghĩa riêng đặc biệt với mỗi người, bởi đôi khi, đọc sách và xem phim
        không chỉ là hoạt động giải trí đơn thuần. Một cuốn sách, một bộ phim,
        một bản nhạc hay một tác phẩm nghệ thuật giàu ý nghĩa có thể thay đổi
        hoàn toàn cách chúng ta nhìn về cuộc sống thường nhật.
      </p>

      <ul className={classNames("unstyled-list", styles.list)}>
        <li>
          <StarSvg className={styles.bullet} /> Một cuốn sách gối đầu giường
          giúp vượt qua những khủng hoảng tuổi trẻ.
        </li>
        <li>
          <StarSvg className={styles.bullet} /> Những bộ phim dạy ta về tình
          bạn, tình cảm gia đình hay truyền cho ta động lực để chiến thắng khó
          khăn.
        </li>
        <li>
          <StarSvg className={styles.bullet} />
          Một list nhạc gắn với những kỷ niệm thời thơ ấu.
        </li>
        <li>
          <StarSvg className={styles.bullet} />
          Một series podcast với nhiều thông tin bổ ích.
        </li>
      </ul>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEkloCoaching%2Fvideos%2F422004493843889&width=500&show_text=false&height=281&appId"
        width="500"
        height="281"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>

      <div className={styles["btn-group"]}>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1eh1XlrILc-XgwO_B2UVDpQJZh1frz6U3yMZ9muaGE5dkLA/viewform">
          <Button className={styles.btn} color="secondary">
            XEM BÀI VIẾT
          </Button>
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1eh1XlrILc-XgwO_B2UVDpQJZh1frz6U3yMZ9muaGE5dkLA/viewform">
          <Button className={styles.btn} color="secondary">
            ĐÓNG GÓP & GỢI Ý
          </Button>
        </Link>
      </div>
    </MaxWidthContainer>
  );
};
