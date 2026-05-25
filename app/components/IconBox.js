import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IconBox({
  type = 'icon', // 'icon' | 'team'
  title,
  subtitle,
  icon,
  image,
  link,
  linkText = 'En savoir plus',
  className = '',
  style = {}
}) {
  if (type === 'team') {
    return (
      <article className={`themetechmount-box themetechmount-box-team themetechmount-teambox-style1 ${className}`} style={{ marginBottom: "30px", height: "100%", ...style }}>
        <div className="themetechmount-post-item" style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
          <div className="themetechmount-content-inner tm-wrap" style={{ flexGrow: 1, position: "relative" }}>
            <div className="themetechmount-team-image-box tm-wrap-cell" style={{ position: "relative", overflow: "hidden" }}>
              <span className="themetechmount-item-thumbnail" style={{ display: "block" }}>
                <span className="themetechmount-item-thumbnail-inner" style={{ display: "block" }}>
                  <Image 
                    alt={title || "Icon"} 
                    className="attachment-themetechmount-img-team-member size-themetechmount-img-team-member wp-post-image" 
                    src={image || '/assets/wp-content/uploads/2022/03/logo4.png'} 
                    width={400}
                    height={420}
                    style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.5s ease" }} 
                  />
                </span>
              </span>
              <div className="tm-member-social" style={{ position: "absolute", top: "20px", right: "20px", zIndex: 2 }}>
                <div className="themetechmount-team-icon" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#ff2a70", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 4px 10px rgba(255,42,112,0.3)" }}>
                  <i className="tm-jassio-icon-share-1"></i>
                </div>
              </div>
            </div>
            <div className="themetechmount-box-content tm-wrap-cell" style={{ padding: "30px 25px", textAlign: "center", backgroundColor: "#fff" }}>
              <div className="themetechmount-innercontent-box">
                <div className="themetechmount-box-title">
                  <h4 style={{ margin: "0 0 12px 0", fontSize: "24px", fontWeight: "600", fontFamily: "Oswald, Arial, sans-serif" }}>
                    {link ? (
                      <Link href={link} style={{ color: "#232323", textDecoration: "none", transition: "color 0.2s ease" }}>
                        {title}
                      </Link>
                    ) : (
                      <span style={{ color: "#232323" }}>{title}</span>
                    )}
                  </h4>
                </div>
                <div className="themetechmount-team-position" style={{ color: "#ff2a70", fontSize: "16px", fontWeight: "500", lineHeight: "1.5" }}>
                  {subtitle}
                </div>
              </div>
            </div>
          </div>
          <div className="tm-bottom-box" style={{ padding: "18px 25px", borderTop: "1px solid #f0f0f0", textAlign: "center", backgroundColor: "#fcfcfc" }}>
            <div className="themetechmount-box-title">
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "500", fontFamily: "Oswald, Arial, sans-serif" }}>
                {link ? (
                  <Link href={link} style={{ color: "#232323", textDecoration: "none" }}>
                    {title}
                  </Link>
                ) : (
                  <span style={{ color: "#232323" }}>{title}</span>
                )}
              </h4>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default 'icon' type
  return (
    <div className={`themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center ${className}`} style={{ height: "100%", padding: "35px 25px", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", backgroundColor: "#fff", transition: "transform 0.3s ease, box-shadow 0.3s ease", ...style }}>
      <div className="themetechmount-iconbox-inner">
        <div className="tm-iconbox-wrapper">
          {icon && (
            <div className="themetechmount-iconbox-icon" style={{ marginBottom: "25px" }}>
              <div className="tm-box-icon" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#ff2a70", color: "#fff", fontSize: "36px", boxShadow: "0 10px 20px rgba(255,42,112,0.3)" }}>
                <i className={`kw_jassio ${icon}`}></i>
              </div>
            </div>
          )}
          <div className="themetechmount-iconbox-heading">
            <h2 className="tm-custom-heading" style={{ fontSize: "22px", fontWeight: "600", fontFamily: "Oswald, Arial, sans-serif", marginBottom: "12px", color: "#232323" }}>
              {title}
            </h2>
            {subtitle && (
              <div className="tm-cta3-content-wrapper" style={{ fontSize: "15px", color: "#666", marginBottom: "20px" }}>
                {subtitle}
              </div>
            )}
            {link && (
              <div className="tm-iocnbox-btn" style={{ marginTop: "15px" }}>
                <Link href={link} style={{ display: "inline-block", padding: "10px 24px", borderRadius: "6px", border: "2px solid #ff2a70", color: "#ff2a70", fontWeight: "600", textTransform: "uppercase", fontSize: "14px", textDecoration: "none", transition: "all 0.3s ease" }}>
                  <span>{linkText}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
